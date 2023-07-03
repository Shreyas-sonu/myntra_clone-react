import styled from "styled-components";

export const Container = styled.div`

`;

export const CartItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-bottom: 40px;

`;
export const CartLeft = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const AddressDiv = styled.div`
  padding: 8px 16px;
  height:50px;
  border-radius: 4px;
  border: 1px solid #eaeaec;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
  margin-left: 30%;
`;
export const DeliverTo = styled.p``;
export const ChangeButton = styled.button`
  width: 25%;
  padding:10px;
  border: 1px solid #ff3f6c;
  border-radius: 4px;
  margin-right: 0;
  color: #ff3f6c;
  background: #fff;
  font-size: 12px;
  font-weight: 600;
cursor: pointer;
  &:hover {
    background-color: #ff3f6c;
    color: #fff;
  }
`;
export const AvailableofferDiv = styled.div`
  padding: 8px 16px;
  margin-left: 30%;
  border-radius: 4px;
  border: 1px solid #eaeaec;
`;
export const TopLA = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: -13px;
`;
export const AvaOffer = styled.p`
  font-size: 12px;
  font-weight: 600;
`;
export const FirstOffer = styled.p`
  font-size: 12px;
`;

export const NoConviDiv = styled.div`
  margin-left: 30%;
  display: flex;
  padding: 8px 16px;
  border: 1px solid #eaeaec;
  border-radius: 4px;
  gap: 5px;
  text-align: center;
  align-items: center;
`;
export const LogoTruck = styled.img`
  width: 35px;
  height: 30px;
`;
export const NoConvi = styled.p``;

export const CartItemsScroll = styled.div`
  height: 300px;
  width: 100%;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CartItemDiv = styled.div`
  margin-left: 30%;
  border-radius: 4px;
  padding: 8px 16px;
  border: 1px solid #eaeaec;
  display: flex;
  font-size: 14px;
  margin-bottom: 20px;
`;
export const Imagediv = styled.div`
  flex: 1;
  margin-right: 10px;
`;
export const ItemIamge = styled.img`
  width: 150px;
  height: 170px;

  object-fit: fill;
`;
export const ItemInfoDiv = styled.div`
  flex: 2;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 1px;
`;
export const Brand = styled.p`
  font-weight: 600;
  margin-bottom: -5px;
`;
export const Name = styled.p`
  font-weight: 200;
`;

export const Filtercontainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  width: 50%;
  margin: 10px 0px;
`;
export const SizeDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: whitesmoke;
`;

export const PriceDis = styled.div`
  display: flex;
  font-size: 14px;
  gap: 10px;
`;
export const Price = styled.p``;
export const Oprice = styled.p`
  text-decoration: line-through;
  color: lightgray;
`;
export const PercentOff = styled.p`
  color: #ff3f6c;
`;
export const FilterPM = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: whitesmoke;
`;
export const RemoveButtonDiv = styled.div`
  flex: 1;
  text-align: right;
`;
export const RButton = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

export const WishListItem = styled.div`
  display: flex;
  margin-left: 30%;
  border-radius: 4px;
  padding: 8px 16px;
  border: 1px solid #eaeaec;
  align-items: center;
  text-align: center;
  gap: 5px;
`;
export const WishName = styled.p`
  font-weight: 600;

  &:hover {
    border-bottom: 1px solid black;
  }
`;



export const Hr = styled.hr`
  width: 70%;
  height: 1px;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;


