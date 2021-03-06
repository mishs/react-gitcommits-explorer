import styled from "styled-components";
import { down } from 'styled-breakpoints'

export const SearchInputStyles = styled.div`
    form {
        display: flex;
        justify-content: center;
        max-width: 920px;
        margin: 0 auto;

        ${down('xs')} {
            flex-direction: column;
        }

        .search-wrapper {            
            display: flex;
            align-items: center;
            background-color: #DFE4EA;
            flex: 1;
            margin-right: 16px;
            border-radius: 8px;
            position: relative;

            ${down('xs')} {
                margin-right: 0;
                margin-bottom: 24px;
            }
            
            svg {
                padding: 16px;
                fill: #29335C;
            }

            .search-icon {
                position: absolute;
            }

            input[type="text"] {
                border: none;
                background: transparent;
                font-size: 20px;
                letter-spacing: -0.5px;
                width: 100%;
                height: 100%;
                display: flex;
                padding-left: 40px;
                margin: auto 2px;

                &::placeholder {
                    color: #B1B5C5;
                }

                &:hover {
                    outline-color: #29335C;; 
                    border-radius: 8px;  
                }

                ${down('sm')} {
                    height: 58px;
                }
            }
        }

        input[type="submit"] {
            background-color: #F3663F;
            color: #fff;
            border: none;
            font-size: 20px;
            letter-spacing: -0.5px;
            font-weight: 600;
            border-radius: 8px;
            height: 58px;
            cursor: pointer;
            padding: 15px 30px;
        }
    }
`