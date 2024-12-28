import PropTypes from 'prop-types';
import Item from './Item';

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Fiat"  ano_lancamento={1964}/>
                <Item marca="Renault" />
            </ul>
        </>
    );
};

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lançamento: PropTypes.number
};

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0
};

export default List;
