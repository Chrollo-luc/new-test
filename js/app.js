// containing the number of elements that has the tag section into an i variable
let i = document.querySelectorAll('section').length
// creating a variable for the main tag
const main_tag = document.querySelector('main');
// making the section elements into an array contained in a no_sections variable
const no_sections = Array.from(document.getElementsByTagName("section"));
// a navbr variable that refers to the nav tag
const navbr = document.querySelector('.navbar__menu');
// btnFuncis a function that creates a new li element and appends it to the main element as a new section
function btnFunc(){
  i++
  //saving the section format in a new_section variable
  const new_section =
    `<section id="section${i}" data-nav="Section ${i}" class="your-active-class">
      <div class="landing__container">
        <h2>Section ${i}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
    </section>`

  // insert the new_section before the end of the main tag element
  main_tag.insertAdjacentHTML("beforeend", new_section);
  const element_click =document.createElement('li');
  element_click.innerHTML =   `<a class ="menu__link" href="#section${i}">Section ${i}</a>`
  navbr.appendChild(element_click);
}
// removelastsec is to remove the last section when called
function removelastsec (){
  let menu = document.querySelector('main');
      menu.removeChild(menu.lastElementChild);
      navbr.removeChild(navbr.lastElementChild);
      i--
}

// create_addElement is a function used to add li elements to the navebar based on the number of sections
function create_addElement(){
  for(sec of no_sections){
     name_of_section = sec.getAttribute('data-nav');
     link_of_section = sec.getAttribute('id');
     creat_Li_Element = document.createElement('li');
     creat_Li_Element.innerHTML = `<a class ="menu__link" href="#${link_of_section}">${name_of_section}</a>`
    navbr.appendChild(creat_Li_Element);
  }
}

create_addElement();


// the_view_point is a function that tells us if a section is a viewpoint
function the_view_point(x){
  let sec_position = x.getBoundingClientRect();
  return (sec_position.top >= 0);
}
// toggle_active_class is a function that makes  the section in view standout from the other sections
function toggle_active_class(){
  for(sec of no_sections){
    if(the_view_point(sec)){
      if(!sec.classList.contains('your-active-class')){
         sec.classList.add('your-active-class');
         let hh=document.getElementsByTagName('LI');
         hh.classList.add('Hover');
        
      }
    }
    else {
      sec.classList.remove('your-active-class');

    }
  }
}


// when a scroll event happens the toggle_active_class function is called
document.addEventListener('scroll', toggle_active_class);
