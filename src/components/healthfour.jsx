
import  "../index.css";
import doc from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/Doc.png"
export function Healthfour() {
  return(

     <section id="section-4">
        <div class="texts">
          <h1>
            Welcome To oniru Health Center 
          </h1>
          <p>
            Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit amet, maximus vehicula nibh. Praesent pulvinar porta elit, a commodo erat accumsan sed. Vivamus vel tristique nibh. Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget ornare dui. Donec nec fringilla mi. Pellentesque molestie consequat felis vitae elementum. Proin ut tempor urna.
          </p>
          <div class="uls-holder">
            <ul class="ul1">
              <li>
                Neurology
              </li>
              <li>
                Gastroenterology
              </li>
              <li>
                Cardiovascular Diseases
              </li>
              <li>Ophthalmology</li>
            </ul>
            <ul class="ul2">
              <li>
                Gastroenterology
              </li>
              <li>
                Ophthalmology
              </li>
              <li>
                Cardiovascular Diseases
              </li>
              <li>Neurology</li>
            </ul>
          </div>
          <button class="B1">Read More</button>
        </div>
        
        <div class="img">

            <img src={doc} alt=""/>
        </div>
      </section>
  )
}