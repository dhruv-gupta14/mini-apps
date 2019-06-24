import React from 'react';
import useResources from './useResources';

const ResourceList = (props) => {
    const resources = useResources(props.resource);
    // const [resources, setResources] = useState([]);
    // // state = { resources: [] };

    //  const fetchResource = async (resource) => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        
    //     setResources(response.data);
    // }

    // useEffect(() => {
    //     fetchResource(props.resource); 
    // }, [props.resource])

    // async componentDidUpdate(prevProps){
    //     //console.log(prevProps);
    //     if(prevProps.resource !== this.props.resource){
    //         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
    //         this.setState({ resources: response.data }); 
    //     }
    // }

        return(
            <ul>{resources.map(record => <li key = {record.id}>{record.title}</li>)}</ul>
        )
}

export default ResourceList;