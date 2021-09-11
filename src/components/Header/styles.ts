import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px 35px; 

  width: 100%;
  height: 80px;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 25px 25px;
  opacity: 1;

  > img {
    height: 42px;
  }



`;

export const ContentDropDown = styled.div`
  position: relative;
  
 
  >button {
    padding: 5px 15px;
    border: none;
   
    color: var(--green-700);
    font-weight: 500;
    background: transparent;
    border-bottom: 1px solid var(--green-700);
  
  
  }

  .dropdown {
   /*  transform: translateX(-50%) rotateX(-90deg);
    transition: all $transition-duration-fast 125ms ease-in; */
    position: absolute;
    right: 0;
    top: 45px;
  
    header { 
      display: flex;
      align-items: center;
      padding: 0 10px;
      background: var(--green-700);
      border-radius: 6px 6px 0 0;
      width: 222px;
      height: 35px;

      color: #fff;

      &:before {
      position: absolute;
      content: '';
      height: 15px;
      width: 15px;
      background:  var(--green-700);
      right: 20px;
      top: -7px;
      transform: rotate(45deg);
      z-index: 1;
     }
    }
  }

  .dropdown__body {
    background: #fff;
    width: 100%;
    min-height:30px;
  }
`;
