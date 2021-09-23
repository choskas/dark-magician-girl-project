import styled from 'styled-components';

export const AddImageButton = styled.button`
    width: 336px;
    height: 48px;
    background: transparent;
    border: 1px solid #5D5FEF;
    border-style: dashed;
    text-align: center;
    font-size: 16px;
    color: #5D5FEF;
`;

export const FormUploadButton = styled.form`
    display: flex;
    justify-content: center;
`;

export const InputUpload = styled.input`
    visibility: hidden;
    height: 0;
    width: 0;
`;

export const UploadErrorText = styled.p`
    text-align: center;
    color: #EF5DA8;
`;