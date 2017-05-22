import { Injectable } from '@angular/core';

@Injectable()
export class LinksService {

  links = [
    {name: 'Angular', url: 'https://angular.io/'},
    {name: 'Angular Style Guide', url: 'https://angular.io/docs/ts/latest/guide/style-guide.html'},
    {name: 'ngDoc', url: 'http://ngdoc.io/'},
    {name: 'Firebase', url: 'https://firebase.com'},
    {name: 'Bootstrap', url: 'https://getbootstrap.com'},
  ];

  constructor() { }

}
