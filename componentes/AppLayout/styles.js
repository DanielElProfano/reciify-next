import css from 'styled-jsx/css'
import { breakpoints, colors, fonts } from '../../styles/themes'

export default css`
    div{
        display: grid;
        place-items: center;
        height: 100vh
    }
    main{
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0, .1);
        height: 100%;
        width: 100%;
    }
    @media (min-width: ${breakpoints.mobile}){
        main{
            width: ${breakpoints.mobile};
            height: 90vh
        }
    }
`

export const globalStyles = css.global`
    html,body {
        background-image:
            radial-gradient(${colors.primary}4d 1px, transparent 1px),
            radial-gradient(${colors.primary}4d 1px, transparent 1px);
        background-position: 0 0 , 25px 25px;
        background-size: 50px 50px;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${fonts}
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box; 
    }
`
