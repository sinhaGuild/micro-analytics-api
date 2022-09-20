import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>ANALYTICS SERVICE</h1><img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Claude_Monet%2C_La_grande_all%C3%A9e_%C3%A0_Giverny_%281900%29.jpg" alt="Girl in a jacket" width="500" height="600"></br><h1><a href="http://localhost:3000/docs">To Playground</a></h1>';
  }
}
