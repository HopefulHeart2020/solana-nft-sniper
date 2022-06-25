import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'assets/img/solana-logo.png';

const Header = () => {
    const navigate = useNavigate();
    const inputDom = useRef();
    const [query, setQuery] = useState('');

    const onChange = e => setQuery(e.target.value);
    const onKeyDown = e => {
        e.stopPropagation();
        if (e.keyCode === 13) {
            if (e.target.value.trim()) navigate('/collection/' + e.target.value.trim());
            else navigate('/');
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            e.preventDefault();
            if (e.keyCode === 191) inputDom.current.focus();
        })
        return () => window.removeEventListener('keydown', null);
    }, []);

    return (
        <div className='container flex items-center justify-between py-2 mx-auto'>
            <Link to='/'>
                <img src={logo} className='w-10 h-10' alt='' />
            </Link>
            <div className='flex items-center gap-3'>
                <div>Search:</div>
                <input value={query} onChange={onChange} onKeyDown={onKeyDown} ref={inputDom} type='text' className='px-3 py-1 bg-transparent border rounded-md w-96' />
            </div>
        </div>
    )
}

export default Header;