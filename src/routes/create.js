import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {addLink} from "../components/links/linksSlice";
import uuid from 'react-uuid';

export default function CreateLink() {
    const dispatch = useDispatch()
    const [linkName, setLinkName] = useState('')
    const [linkUrl, setLinkUrl] = useState('')
    const handleAddLinkClick = () => {
        dispatch(addLink({
            id: uuid(),
            points: 0,
            name: linkName,
            url: linkUrl,
        }))
    }
    return <div className={`create-link`}>
        <div className={`submit`}>
            <Link to='/'>{`<= Return to list`}</Link>
        </div>
        <form>
            <h3>Add new link</h3>
            <label htmlFor="name" style={{marginBottom: '16px'}}>
                Link Name
                <input style={{marginLeft:'8px'}} type="text" id={`name`} value={linkName} onChange={(e) => setLinkName(e.target.value)} />
            </label>
            <label htmlFor="url">
                Link Url
                <input style={{marginLeft:'8px'}} type="text" id={`url`} value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} />
            </label>
            <button style={{marginTop:'8px'}} type={`button`} onClick={handleAddLinkClick}>Add link</button>
        </form>
    </div>
}