import styled from "styled-components";

export const Item = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 24px;
  border: 3px solid ${({ $hard }) => ($hard ? "#ff6b6b" : "transparent")};
  background: ${({ $hard }) => ($hard ? "#fff0ee" : "transparent")};
  box-shadow: ${({ $hard }) =>
    $hard ? "0 12px 28px rgba(255, 107, 107, 0.45)" : "none"};
  transform: ${({ $hard }) => ($hard ? "translateY(-8px) scale(1.03)" : "none")};
`;

export const Badge = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ff6b6b;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  letter-spacing: 0.5px;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 22px;
`;

export const Name = styled.h3`
  font-size: 13px;
`;

export const Info = styled.div`
  display: flex;
  gap: 12px;
  background: #fff;
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 11px;
  white-space: nowrap;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
`;