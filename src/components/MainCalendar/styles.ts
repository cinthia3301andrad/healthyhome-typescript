import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 75%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 25px;
  opacity: 1;

  padding: 10px 0;

  .fc {
    width: 100%;
  }
  .fc-col-header  {
    width: 100%;
  }

  .btn-primary {
    background-color: transparent;
    border-color:transparent;
      span { 
        color: #4d4f6c;
      }
      &:hover {
      z-index: 0;
      }
      &:focus {
        
        background: transparent !important;
        animation: none !important;
        border-color: #FFFFFF !important;
      } 
      &:active {
        
        border-color:transparent !important;
      } 

  }
  .fc-dayGridMonth-button {
    background-color: rgba(119,140,162,.08) !important;
    border-color: transparent !important;
    padding: 5px 30px !important;
    border-radius:15px !important;
    color: #4d4f6c !important;
  }
  .fc-header-toolbar {
    padding:10px;
    .fc-toolbar-title {
      font-size:1.2rem;
      text-align: left;
      font-family: 'Poppins';
      font-weight: 500;
      letter-spacing: 0px;
      color: #4D4F6C;
      opacity: 1;
    }
  }
  .fc .fc-button-primary {
    background-color: transparent; 
    border-color: transparent;
    color: #4D4F6C;

    &:hover {
      filter: brightness(0.8);
      background: transparent;
      border-color: transparent;
    }
    &:focus {
      filter: brightness(0.8);
      background: transparent;
      border-color: transparent;
    }
    &:onClick {
      filter: brightness(0.8);
      background: transparent;
      border-color: transparent;
    }
  }



`;
export const Content = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;




`;
