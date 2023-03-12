import './pageBar.css'
import { useContext } from 'react';
import PageContext from '../../context/PageProvider';

const PageBar = () => {
    const { page, setPage, numOfPages } = useContext(PageContext)

    return (
        <div className="page-bar">
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous Page</button>
            <span>Page {page} of {numOfPages}</span>
            <button disabled={page === numOfPages} onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
    )
};

export default PageBar;