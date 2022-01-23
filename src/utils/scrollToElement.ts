
 const scrollToElementById = (elementId:string, yOffSet:number)=> {
    const element = document.getElementById(elementId);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffSet;
  
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  export default scrollToElementById