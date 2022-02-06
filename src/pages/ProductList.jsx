import styled from 'styled-components';
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div``;

const Title = styled.h1``;

const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin:20px;
`;

const Filter = styled.div`
    margin:20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right:20px;
`

const Select = styled.select`
    padding:10px;
    margin-right:20px;
`

const Option = styled.option`
    
`

function ProductList() {
  return (
  <Container>
        <Announcements></Announcements>
        <Navbar></Navbar>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Products:
                </FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>Small</Option>
                    <Option>Medium</Option>
                    <Option>Large</Option>
                    <Option>XL</Option>
                </Select>
                
            </Filter> 
            <Filter>
                <FilterText>
                    Sort Products:
                </FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
                
            </Filter> 
        </FilterContainer>
        <Products></Products>
        <Newsletter></Newsletter>
        <Footer></Footer>
  </Container>);
}

export default ProductList;
