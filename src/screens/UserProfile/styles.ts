
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;

`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;


  padding: 50px 20px;

  width: 100%;
  min-height: calc(100vh - 80px);

  .agenda {
    width: 30%;
    height: 500px;
    
  }
  .main {
   
  }

`;
export const Main = styled.section`
  width: 70%;
  height:100%;
  
  min-height: 500px;
  padding: 0 25px;

  .main-top {
    display: flex;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 110px;
    background: rgb(255, 255, 255) none no-repeat scroll 0% 0% padding-box;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 8px;
    border-radius: 15px;
    opacity: 1;
    margin: 0px 30px 20px 0px;
    padding: 0px 15px;
    font-family: "Poppins", sans-serif;

    img {
    
      height: 55%;
    }

    > div {
      display: flex;
      align-items: flex-end;

      width: 100%;
     
      h1 {
        font-weight: bold;
        font-size: 1.8rem;
       
        color: rgb(0, 191, 165);
        margin: 0 0;
        line-height: 1.8rem;
      
      }
      h2 {
        
        font-weight: 500;
        font-size: 1.1rem;
      
        color: var(--bs-gray-600);
        margin: 0;
        margin-left: 10px;
      }
    }
  }
  
  .main-center {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 300px;
   
  }
  .center__bloc  {
    padding: 25px;
    width: 547px;
    height: 427px;
  
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 3px #00000029;
    border-radius: 15px;
    opacity: 1;


    .title {
      display: flex;
      justify-content:space-between;
      padding-bottom: 5px;
      border-bottom: 1px solid rgb(0, 191, 165);

      h1 {
        font-size: 1.2rem;
        font-weight: 500;
      }

      button {
        border-radius: 19px;
        height: 38px;
        border: medium none;
        font-size: 1rem;
        text-align: center;
        padding: 0px 10px;
        letter-spacing: 0px;
        color: rgb(255, 255, 255);
        background: rgb(0, 191, 165);

        &:hover {
          background: rgb(29, 233, 182) none repeat scroll 0% 0%;
        }
      }
    }
  }

  .condominios {
    margin-left: 25px ;
  }

  .profile {
    display: flex;
    flex-direction: column;

    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0;
      margin-top: 10px;
      li {
        margin-top: 2px;
      
        list-style-type: none;
        
      }
      span {
        font-size: 1rem;
        font-weight: 500;
      }
      p {
        color: rgb(119, 140, 162);
      }
    }
  }
`;
