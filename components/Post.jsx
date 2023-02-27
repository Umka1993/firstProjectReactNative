import { StatusBar, Alert, Image, View } from 'react-native'
import styled from 'styled-components/native'
import axios from "axios";
import {useEffect, useState} from "react";


const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-radius: 15px;
  border-bottom-color: black;
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
    font-size: 17px;
    font-weight: 700;
`;
const PostDetails = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

const PostDate = styled.Text`
  font-size: 12px;
  color: rgb(0,0,0,0.4);
  margin-top: 4px;
`
export const Post = ({title, imageUrl, createdAt}) => {

    const truncateTitle = (str) => {
        if(str >= 50){
            return str.substring(0,50) + '...';
        }

        return str;
    };

    console.log('createdAt', createdAt)

    return (
            <PostView>
                <PostImage  source = {{uri: imageUrl}}/>
                <PostDetails>
                    <PostTitle>{truncateTitle(title)}</PostTitle>
                    <PostDate>{createdAt}</PostDate>
                </PostDetails>
            </PostView>
    );
};

