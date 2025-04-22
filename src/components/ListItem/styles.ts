import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    background-color: #20212E;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #CCC;
        text-decoration: ${props => props.done ? 'line-through' : 'initial'};
    }
`;

export const DeleteButton = styled.div`
    margin-left: auto;
    cursor: pointer;
`;