import { makeAutoObservable } from "mobx";


export default class This {

  title: string | null;
 

  constructor() {
    makeAutoObservable(this);
   
    this.title = null;
   
  }
  
  setTitle = (data: string) => {
    if (data) {
      this.title = data;
    }
  };
  
  };