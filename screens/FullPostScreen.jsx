import {ActivityIndicator, Alert, Text, View} from "react-native";
import styled from 'styled-components/native'
import {useEffect, useState} from "react";
import axios from "axios";
import {Loading} from "../components/Loading";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`

export const FullPostScreen = ({route, navigation}) => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id, title }=route.params

    useEffect( ()=>{
        navigation.setOptions({title: title})
        fetchPosts()
    },[])

    const fetchPosts = async ()=>{
        setIsLoading(true)
        try{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
            setData(data)
            setIsLoading(false)
        }
        catch (e) {
            Alert.alert('', 'Ошибка при получении данных')
        }
    }


    if(isLoading){
        return <Loading/>
    }

    return (
        <View style={{ padding: 15 }}>
            <PostImage source ={{uri: data.url}}/>
            <PostText >{data.title}</PostText>
        </View>
    );
};
