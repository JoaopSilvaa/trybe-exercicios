import { IAirPlane } from './interfaces';

export default class Car implements IAirPlane {
  fly(): void {
    console.log('Fly a airplane');
  }
}