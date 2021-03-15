import { Injectable } from '@angular/core';
import { Objcard } from 'src/app/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  data:Array<Objcard>=[
    {
      name: 'TypeScript Course for Beginners 2021 - Learn TypeScript from Scratch!',
      url:'https://www.youtube.com/watch?v=BwuLxPH8IDs&ab_channel=Academind',
      videoId:'BwuLxPH8IDs',
      
    },
    {
      name: 'VS Code useful Extension - Set your code on fire',
      url:'https://www.youtube.com/watch?v=9CVZks6U0ZY&list=PL8p2I9GklV45JZerGMvw5JVxPSxCg8VPv&ab_channel=CodeStepByStep',
      videoId:'GYAB4Td62zI',
      
    },
    {
      name: 'Angular Full Course in 5 Hours | Angular Tutorial For Beginners | Angular Training | Edureka',
      url:'https://www.youtube.com/watch?v=JepMpjhkt-4&ab_channel=EfficientUser',
      videoId:'xGpHfFf18Ns',
      
    },
    {
      name: 'Ionic 4 & Angular Tutorial For Beginners - Crash Course',
      url:'https://www.youtube.com/watch?v=r2ga-iXS5i4&ab_channel=Academind',
      videoId:'r2ga-iXS5i4',
      
    },
    {
      name: 'Angular Full Course in 5 Hours | Angular Tutorial For Beginners | Angular Training | Edureka',
      url:'https://www.youtube.com/watch?v=JepMpjhkt-4&ab_channel=EfficientUser',
      videoId:'xGpHfFf18Ns',
      
    },
    {
      name: 'TypeScript Course for Beginners 2021 - Learn TypeScript from Scratch!',
      url:'https://www.youtube.com/watch?v=BwuLxPH8IDs&ab_channel=Academind',
      videoId:'BwuLxPH8IDs',
      
    },
  ]

constructor(private http:HttpClient) { }

getAllVideo():Array<Object>{
  return this.data
}
}
