/**
 * Import testing library
 * Import Input from ../Components/Input
 */
import { act, render, fireEvent } from '@testing-library/react';
import Input from '../Components/Input';

describe("Input Component", () => {
    // Render input form in input component
    it("render input", ()=>{

        const {getByTestId} = render(<Input showDiv={false}/>);
        const input = getByTestId("searchBar");
        expect(input).toBeTruthy();

    })

    // Render div form in the input component
    it("render div", () => {
        const {getByTestId} = render(<Input showDiv={true}/>);
        const div = getByTestId('divWeWantToShow');
        expect(div).toBeTruthy();
    })

    // Don't render the div

    it("don't render div", () => {
        const {queryByTestId} = render(<Input showDiv={false}/>);
        const input = queryByTestId("divWeWantToShow");
        expect(input).toBeFalsy();
    })

    // render text on chang in input
    it("change on input causes change on header", async() => {
        await act(async()=>{
            const {getByTestId} = render(<Input showDiv={false}/>);
            const input = getByTestId("searchBar");
            const header = getByTestId("displaySearch");

            const inputWord = "Freddy";
            await fireEvent.change(input, {target: {value: inputWord}});
            expect(header.innerHTML).toBe(inputWord)
        })
    })

})