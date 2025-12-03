import React from 'react';
import CreatorCard from './CreatorCard';

function MainPage() {
  return (
    <div>
      <div className='mainPageContainer'>
        <div className='mainTitleText'>THE HANGOUT APP THAT YOU NEED IS HERE!</div>
        <div className='mainSecondaryText'>
          With this website, You (and your friends) will finally be able to do that one Hangout! 
          No more being stuck on the Planning stage for months! Just drop your schedules in here and 
          let us help you finally find The Date to meet and Hangout on without a hassle!
        </div>
      </div>

      <div className='secondaryPageContainer'>
        <div className='secondTitleText'>Our Background</div>
        <div className='secondSecondaryText'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum nulla quam
          , a sodales tellus aliquet vel. Quisque euismod rhoncus tellus, id varius felis porttitor iaculis. 
          Duis ac lacus leo. Mauris et ante molestie, feugiat magna a, interdum est. Class aptent taciti sociosqu 
          ad litora torquent per conubia nostra, per inceptos himenaeos. Donec finibus euismod justo maximus pharetra. 
          Fusce pharetra lorem odio, ut mattis tortor sollicitudin et. Sed lobortis, dolor et lobortis eleifend, enim 
          ipsum luctus felis, sed laoreet turpis leo ut purus.
        </div>
        <div className='secondSecondaryText'>
          In eget sapien egestas quam facilisis ultricies nec id tellus. Proin aliquam gravida velit, ut ultrices felis 
          ultricies ut. Praesent non nisl aliquet, ornare arcu at, tristique justo. In mattis malesuada odio sed tempus. 
          Mauris in feugiat magna. Pellentesque molestie magna interdum varius porta. Nullam vitae ante id arcu placerat 
          dignissim vitae non sem. Aliquam mollis felis dignissim mi sagittis viverra.
        </div>
      </div>

      <div className='secondMainTitleText'>Features</div>

      <div className='CarouselContainer'>

      </div>

      <div className='secondMainTitleText'>Possible Features in The Future</div>

      <div className='CarouselContainer'>

      </div>

      <div className='secondMainTitleText'>
        Not Convinced? Try it out now... Completely Free! No extra fees! Just sign in your account below 
        (For identity purposes)! And let us know what you think!
      </div>

      <div className='SignUpButton'>
        Sign Up Here →
      </div>

      <div className='secondMainTitleText'>
        The People Behind [WEBNAME]!
      </div>

      <div className='creatorCardContainer'>
          <CreatorCard 
          name={"[Insert Name Here]"}
          role={"Role 1, Role 2, Role 3"}
          description={`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum nulla quam, a sodales tellus aliquet vel. 
            Quisque euismod rhoncus tellus, id varius felis porttitor iaculis. Duis ac lacus leo.
          `}
          imageSrc={"src/assets/ProfileExample.png"}
          />

        <CreatorCard 
          name={"[Insert Name Here]"}
          role={"Role 1, Role 2, Role 3"}
          description={`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum nulla quam, a sodales tellus aliquet vel. 
            Quisque euismod rhoncus tellus, id varius felis porttitor iaculis. Duis ac lacus leo.
          `}
          imageSrc={"src/assets/ProfileExample.png"}
          />
      </div>

      <style jsx>
          {`
              .mainPageContainer {
                  background-color: black;
                  padding-top: 60px;
                  padding-bottom: 60px;
                  padding-left: 20px;
                  padding-right: 20px;
              }

              .mainTitleText {
                  color: white;
                  font-size: 35px;
                  font-weight: 600;
                  font-family: "Inter", sans-serif;
                  margin-top: 15px;
                  margin-bottom: 15px;
              }

              .mainSecondaryText {
                  color: white;
                  font-size: 13px;
                  font-weight: 300;
                  font-family: "Inter", sans-serif;
                  margin-top: 15px;
                  margin-bottom: 15px;
                  text-align: justify;
              }

              .secondaryPageContainer {
                  padding-top: 20px;
                  padding-bottom: 20px;
                  padding-left: 20px;
                  padding-right: 20px;
              }

              .secondTitleText {
                  color: black;
                  font-size: 35px;
                  font-weight: 600;
                  font-family: "Inter", sans-serif;
                  margin-top: 15px;
                  margin-bottom: 15px;
              }

              .secondSecondaryText {
                  color: black;
                  font-size: 13px;
                  font-weight: 300;
                  font-family: "Inter", sans-serif;
                  margin-top: 15px;
                  margin-bottom: 15px;
                  text-align: justify;
              }

              .secondMainTitleText {
                  color: black;
                  font-size: 35px;
                  font-weight: 600;
                  font-family: "Inter", sans-serif;
                  margin-top: 15px;
                  margin-bottom: 15px;
                  padding-left: 20px;
                  padding-right: 20px;
              }

              .CarouselContainer {
                  padding-left: 20px;
                  padding-right: 20px;
                  height: 200px;
                  background-color: white;
                  margin-bottom: 40px;
              }

              .SignUpButton {
                  color: white;
                  font-size: 25px;
                  font-weight: 600;
                  font-family: "Inter", sans-serif;
                  text-align: center;
                  background-color: black;
                  border-radius: 40px;
                  padding: 20px 20px 20px 20px;
                  width: 200px;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 40px;
                  margin-bottom: 40px;
              }

              .creatorCardContainer {
                  display: flex;
                  flex-wrap: wrap;
              }
          `}
      </style>
    </div>
  );
};

export default MainPage;