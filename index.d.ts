/**
 * @author chin98edwin
 * @copyright Copyright (c) 2019, chin98edwin
 * @description
 * @version 0.0.1
**/

declare namespace quickmenu {

    /**
     * @description Use this function to launch a component or start your program.
     */
    function start(
        /**
         * @description The component to launch
         */
        component: Component,
        /**
         * @description The props to be passed
         */
        props?: object
    ): void;

    /**
     * @description A simple function for showing boolean prompts
     */
    function prompt(
        /**
         * @description The prompt message
         */
        text: string,
        /**
         * @description Function to be triggered if "Y" is selected
         */
        ifYes: Function,
        /**
         * @description Function to be triggered if "N" is selected
         */
        ifNo: Function,
        /**
         * @description The default response of the prompt
         */
        defaultResponse?: "-" | "y" | "n"
    ): void;

    /**
     * @description Add padding to strings.
     * @returns The formatted string.
     */
    function setW(
        /**
         * @description Total width of the new string
         */
        width: number,
        /**
         * @description Alignment of text
         */
        align: "l" | "c" | "r",
        /**
         * @description The text to be formatted
         */
        text: string
    ): string;

    /**
     * @description Creates a neatly arranged grid menu.
     * @returns The formatted grid menu.
     */
    function getGridMenu(
        /**
         * @description The array
         */
        options: Array<unknown>, // TODO
        /**
         * @description Number of columns to break the grid by
         */
        breakBy: number,
        /**
         * @description The bullet format
         */
        bullet?: string,
        /**
         * @description Indices that corresponds to the options (for vertical list)
         */
        vIndex?: Array<unknown>, // TODO
        /**
         * @description (Internal use) Use options[i]["text"] instead of options[i]
         */
        useText?: boolean
    ): string;

    /**
     * @description Rearranges an array for vertical menu printing.
     * @returns A rearranged array and their original indices.
     */
    function vGridTransform(
        /**
         * @description The array
         */
        options: Array<unknown>, // TODO
        /**
         * @description Number of columns to break the grid by
         */
        breakBy: number,
        /**
         * @description The bullet format
         */
    ): { arr: Array<string>, ind: Array<number> };

    /**
     * @description Inherit this object to begin designing your menu.
     */
    class Component {

        /**
         * @description
         */
        constructor(props: object): void

        /**
         * @description Called to process the rendarable contents.
         */
        render(): void

        /**
         * @description Called before the rendered contents are actually printed. This method is intended for debug and testing purposes only.
         */
        componentWillPrint(
            head: string,
            body: string,
            foot: string
        ): void

        /**
         * @description Called when the component catches an error. Call `this.__launch__()` in your overridden method if you wish to re-mount component.
         */
        componentDidCatch(
            /**
             * @description The error caught in the component.
             */
            error: Error
        ): void

        /**
         * @description
         */
        componentDidMount(): void

        /**
         * @description
         */
        componentDidLoop(): void

        /**
         * @description
         */
        componentDidReceive(
            response: unknown, // TODO
            body: unknown, // TODO
            injected: string): void

        /**
         * @description
         */
        componentWillLoop(): void

        /**
         * @description
         */
        componentWillUnmount(): void

        /**
         * @description
         */
        __stringifyBody__(): void

        /**
         * @description
         */
        __launch__(): void

    }

}

export = quickmenu;
export as namespace quickmenu;