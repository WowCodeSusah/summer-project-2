import React from 'react';
import Title from './Title';

function CreatorCard({ name, role, description, imageSrc }) {
  return (
    <div>
        <div className='creatorCardMainContainer'>
            <div className='profileCircle'>
                <img src={imageSrc} alt="Profile Picture" class="profilePicture"></img>
            </div>
            <div>
                <div className='socialsName'>{name}</div>
                <div className='socialsRoles'>{role}</div>
                <div className='socialsDescription'>
                    {description}
                </div>
                <div className='socialsContainer'>
                    <div>Github</div>
                    <div>Instagram</div>
                    <div>Twitter/X</div>
                </div>
            </div>
        </div>
        <style jsx>
            {`
                .creatorCardMainContainer {
                    max-width: 500px;
                    display: grid;
                    grid-template-columns: 3fr 5fr;
                    background-color: white;
                    border-radius: 20px;
                    box-shadow: rgba(0,0,0,0.3) 0 4px 10px;
                    margin-left: 20px;
                    margin-right: 20px;
                    margin-top: 20px;
                    margin-bottom: 20px;
                    flex: 1;
                    padding: 15px;
                }

                .socialsName {
                    font-family: "Inter", sans-serif;
                    font-size: 20px;
                    text-align: center;
                    font-weight: 600;
                }

                .socialsRoles {
                    font-family: "Inter", sans-serif;
                    font-size: 12px;
                    text-align: center;
                    margin-bottom: 10px;
                    font-style: italic;
                }

                .socialsDescription {
                    font-family: "Inter", sans-serif;
                    font-size: 14px;
                    text-align: center;
                    margin-bottom: 10px;
                }

                .socialsContainer {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    text-align: center;
                    font-family: "Inter", sans-serif;
                    font-size: 13px;
                    color: #909090;
                    text-decoration: underline;
                }

                .profileCircle {
                    width: 110px;
                    height: 110px;          
                    border-radius: 50%;     
                    overflow: hidden; 
                    margin: auto;
                }

                .profilePicture {
                    width: 100%;
                    height: 100%;        
                    object-fit: cover;      
                    object-position: center;
                }

            `}
        </style>
    </div>
  );
};

export default CreatorCard;