import { useEffect, useState } from 'react';

const usePackage = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=> {
        fetch('https://howling-citadel-94409.herokuapp.com/package')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
    return [packages];
};
export default usePackage;