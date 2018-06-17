export class Upload {
    //properties which we want to send to the database
    $key: string;
    file: File;
    name: string;
    url: string;
    progress: number;
    createdAt: Date = new Date();
  
constructor (file: File) {
    this.file = file;
}

  }