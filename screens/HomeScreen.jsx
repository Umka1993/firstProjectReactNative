
import {StatusBar, Image, View, FlatList, Alert, ActivityIndicator, Text, RefreshControl, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import {Post} from "../components/Post";
import {useEffect, useState} from "react";
import axios from "axios";
import {Loading} from "../components/Loading";



export const HomeScreen = ({navigation}) => {

    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = async ()=>{
        setIsLoading(true)
        try{
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=15')
            setItems(data)
            setIsLoading(false)
        }
        catch (e) {
            Alert.alert('', 'Ошибка при получении данных')
        }
    }

    useEffect(()=>{
            fetchPosts();
        }
        ,[])

    if(isLoading){
        return <Loading/>
    }

    return (
        <View >
            <FlatList
                refreshControl={ <RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
                data={items}
                renderItem={ ({item}) =>
                    <TouchableOpacity onPress={()=>navigation.navigate('FullPostScreen', {id: item.id, title: item.title})} >
                        <Post
                            title={item.title}
                            createdAt={'24.02.23'}
                            imageUrl={item.url}
                        />
                    </TouchableOpacity>
                }
            />
        </View>
    );
}
