import styled from 'styled-components'

export const ImageContainer = styled.div`
    margin-top: 2rem;
    
`

export const ProductImage = styled.div`
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content:center;
    background-color: ${({ hasImage }) => hasImage ? "transparent" : "var(--input-background-color)"};
    margin: 3rem 0 2rem;
    min-height: 20rem;
    position: relative;
    /* max-width: 45rem; */

    img {
        width: 100%;
        object-fit:cover;
        object-position:center;
        left: 0;
        top: 0;
    }
`

export const AccessoriesFormContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    align-items: start;
`

export const AccessoriesContainer = styled.div`
    padding: 2rem; 
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    border-radius: .5rem;
`

export const StockContainer = styled.div`
    padding: 2rem; 
    box-shadow: var(--container-shadow);
    background-color: var(--container-background-color);
    border-radius: .5rem;
`

export const DeleteButton = styled.button`
    cursor: pointer;
    display:none;
    border-radius:50%;
    position: absolute;
    border: none;
    background-color: var(--color-red);
    color: #fff;
    padding: .5rem .75rem;
    font-size: 1rem;
    right: .5rem;
    top: .5rem;

    outline: none;

    &:focus {
        outline: none;
    }
`

export const NewImageContainer = styled.div`
    position: relative;
    min-width: 15rem;
    width: 15rem;
    height: 15rem;


    ${({ isPrimary }) => console.log(isPrimary)}

    border: ${({ isPrimary }) => isPrimary ? '1px solid var(--primary-color)' : 'unset'};
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    &:hover ${DeleteButton} {
        display: block
    }
`

export const NewImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    /* overflow-x: auto; */
    padding-bottom: 2rem;
    margin-bottom: 2rem;

`