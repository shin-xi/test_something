import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss']
})
export class UploadImgComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder,
              private http: HttpClient) {
    this.myForm = fb.group({
      file: []
    });
  }

  uploadFile(e) {
    const files = e.target.files;
    const imageLimit = 9;
    if (files.length > 0) {
      let file;
      const formData = new FormData();
      for (let i = 0; i < Math.min(files.length, imageLimit); i++) {
        file = files[i];
        formData.append(`userFile-${i}`, file, `${new Date().getTime()}_${'mockId'}_${i}.${file.name.split('.')[1]}`);
      }

      // this.http.post('https://rx-wechat.natapp4.cc/enterprise_WeChat/squareImageServlet', formData, { reportProgress: true })
      //   .map(resp => resp)
      //   .subscribe(data => console.log('response', data));

      const req = new HttpRequest('POST', 'https://rx-wechat.natapp4.cc/enterprise_WeChat/squareImageServlet', formData, {
        reportProgress: true,
      });

      this.http.request(req).subscribe(event => {
        // Via this API, you get access to the raw event stream.
        // Look for upload progress events.
        if (event.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          const percentDone = Math.round(100 * event.loaded / event.total);
          console.log(`File is ${percentDone}% uploaded.`);
        } else if (event instanceof HttpResponse) {
          console.log(event.body);
          console.log('File is completely uploaded!');
        }
      });
    }
  }

  ngOnInit() {
  }

}
