import styled from "styled-components";

export const Box = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 10px 16px;
  display: inline-block;
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Row = styled.div`
  display: flex;
  gap: 6px;
`;

export const Pill = styled.span`
  font-size: 10px;
  padding: 4px 9px;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? "#ff6b6b" : "#fdf1c8")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
`;