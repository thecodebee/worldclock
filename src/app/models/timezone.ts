export class Timezone {
  name: string;
  code: string;
  formattedDate: string;
  formattedTime: string;
  ampm: string;

  constructor(name:string, code: string){
    this.name = name;
    this.code = code;
  }

  setFormattedDate(formattedDate: string){
    this.formattedDate = formattedDate;
  }

  setFormattedTime(formattedTime: string){
    this.formattedTime = formattedTime;
  }

  setAMPM(ampm: string){
    this.ampm = ampm;
  }
}
