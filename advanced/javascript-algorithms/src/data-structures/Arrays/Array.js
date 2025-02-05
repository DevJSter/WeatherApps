class MadeArray{
     constructor(){
         //initiates MadeArray object with an empty object with length 0
         this.length = 0;
         this.elements = {};
     }
    /**
     * 
     * @param {number} index -index of the element to return
     * @returns {any}
     */
     getElement(index){
         return this.elements[index];
     }
     /**
      * 
      * @param {any} element -element to push at the end of the array
      * @returns {number}
      */
     push(element){
         this.elements[this.length] = element;
         this.length++;
         return this.length; 
     }
     /**
      *
      * @returns {any} - last element that is removed from the array
      */
     pop(){
         const element_to_pop = this.elements[this.length - 1];
         delete this.elements[this.length - 1];
         this.length--; 
         return element_to_pop;
     }
     /**
      * 
      * @param {number} index -index of the element to delete
      * @returns {any} -element that has been deleted
      */
     delete(index){
         const element_to_delete = this.elements[index];
         this.shiftElements(index);
         return element_to_delete;
     }
     /**
      * 
      * @param {number} index -index of the element that we should start shifting from
      */
     shiftElements(index){
         //element in the position on index is overwrited and deleted
         for(let x = index; x < this.length-1; x++){
             this.elements[x] = this.elements[x+1];
         }
         //delete the last element not to appear two times
         delete this.elements[this.length - 1];
         
         this.length--;
     }
}

