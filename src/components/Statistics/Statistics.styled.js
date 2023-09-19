import styled from 'styled-components';

export const Title = styled.h3`
  padding: 16px 0px;
  font-size: 24px;
  text-align: center;
  color: #051f32;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 600;
`;

export const NoFeedback = styled.p`
  text-align: center;
  font-weight: 600;
`;
