/**
 * Import testing library
 * Import Button from ../Components/Button
 */
 import { act, render, fireEvent } from '@testing-library/react';
 import Button from '../Components/Button';
 
 describe("Button Component", () => {
     // Render button form in Button component
     it("render Button", ()=>{
 
         const {getByTestId} = render(<Button/>);
         const button = getByTestId("button");
         expect(button).toBeTruthy();
 
     })

    //  render 1 button before clicking on the button
     it("render 1 button before button click", ()=>{
         const {getAllByTestId} = render(<Button/>);
         const buttonList = getAllByTestId('button');
         expect(buttonList).toHaveLength(1);
     })

      //  render 2 button before clicking on the button
      it("render 2 buttons before button click", async()=>{
        await act(async()=>{
            const {getAllByTestId} = render(<Button/>);
            const buttonList = getAllByTestId('button');
            await fireEvent.click(buttonList[0]);
            expect(buttonList).toHaveLength(1);
        })
    })
 })