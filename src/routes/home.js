import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import LinkItem from "../components/links";
import Pagination from "../components/pagination";
import {useDispatch, useSelector} from 'react-redux';
import {selectLinks, increasePoint, decreasePoint, deleteLink} from "../components/links/linksSlice";
import RemoveLinkModal from "../components/modal/removeLink";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const list = useSelector(selectLinks)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [sort, setSort] = useState('')
    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentLink, setCurrentLink] = useState('');
    const perPage = 5;
    const sortKey = 'points'
    const sortCompare = key => (a, b) => {
        const fieldA = a[key]
        const fieldB = b[key]
        let comparison = 0
        if (fieldA > fieldB) {
            comparison = 1
        } else if (fieldA < fieldB) {
            comparison = -1
        }
        return comparison
    }
    const setLimit = (c, a) => {
        return a.filter((x, i) => i <= (c - 1))
    }
    const setOffset = (c, a) => {
        return a.filter((x, i) => i > (c - 1))
    }
    const handlePageClick = (number) => {
        setPage(number)
    }
    const handleIncreaseClick = (id) => {
        dispatch(increasePoint(id))
    }
    const handleDecreaseClick = (id) => {
        dispatch(decreasePoint(id))
    }
    const handleDeleteClick = (id) => {
        setCurrentLink(id)
        setIsOpen(true)
        // dispatch(deleteLink(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteLink(id))
        toast.success("Link is deleted")
        setIsOpen(false)
    }
    const closeDeleteModal = () => {
        setIsOpen(false)
    }
    const handleSortChange = (value) => {
        setSort(value)
    }
    const renderList = () => {
        const o = (page - 1) * perPage
        let result = [...list]
        if (sort === 'most') {
            result = result.sort(sortCompare(sortKey))
            result.reverse()
        }
        if (sort === 'less') {
            result = result.sort(sortCompare(sortKey))
        }
        result = setOffset(o, result)
        result = setLimit(perPage, result)
        return result.map((item) => {
            return (
                <LinkItem id={item.id} name={item.name} points={item.points} key={item.id}
                          onIncreaseClick={handleIncreaseClick} onDecreaseClick={handleDecreaseClick}
                          onDeleteClick={handleDeleteClick} />
            )
        })
    }
    return (
        <>
            <div className={`home`}>
                <div className={`submit`}>
                    <Link to="/create">+ submit a link</Link>
                </div>
                <div className={`sort`}>
                    <select name="sort" id="sort" defaultValue={``} onChange={(e) => handleSortChange(e.target.value)}>
                        <option value="">Order by ...</option>
                        <option value="most">Most voted (Z-A)</option>
                        <option value="less">Less voted (A-Z)</option>
                    </select>
                </div>
                <div className={`list`}>
                    {renderList()}
                </div>
                <Pagination perPage={perPage} total={list.length} current={page} onClick={handlePageClick} />
            </div>
            <RemoveLinkModal current={currentLink} closeModal={closeDeleteModal} isOpen={modalIsOpen} submitModal={handleDelete} />
            <ToastContainer />
        </>
    )
}