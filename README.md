# COMPONENTS
The `/components` directory is where you can build out your various application modules or components.

For more information on creating VueJs components see this url:
https://vuejs.org/v2/guide/components.html

## How it works

1. Create a component based on the `/components/_blank` template.
  * duplicate _blank and rename for your component.  


2. Add the new component to the store index `/store/index.js`.  
   *  **edit the  index.js**  ...  
   * make a new import...ex( using made up name "seemore")  
     ` import {seemore} from '../components/seemore/store.js'`    
    * Add it to the "export defaut" statement.  
      `seemore,`  

    *  Now, edit the **index.vue**  template & compose the component.   
        * give **section** a class  and/or an id.  
        ` <section class="seemore " id="seemore"> `

        * Now insert some HTML markup for the component.

     *  **EDIT "store.js"**  
          a. change the const name to seemore   
          b. change - export {seemore}   


3. Add the new component to the `/components/App.vue` file or the local file.  

  * **Import the section into the script.**   

    a. Makeup a reference name "Iseemore"   
      * This is a tag name to insert into the view.  
          ` Use:  <Iseemore> in seemore </Iseemore>`  

( in "script" section near the bottom of  page)  
    b. Make an import statement, add to the list.    
    c. Add "Iseemore" to the "export default" components list.  


## 4.  Start using component.
