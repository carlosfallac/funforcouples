import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./style";
import { Load } from "../../Animations/Load";
import { Card } from "../Card";
import firestore from "@react-native-firebase/firestore";

export function List({ collection }) {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const subscriber = firestore()
      .collection(collection)
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setList(data);
        setIsLoading(false);
      });
    return () => subscriber();
  }, []);
  return (
    <Container>
      {
        isLoading ?
          <Load />
          :
          <FlatList
            data={list}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Card data={item} />}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          />
      }
    </Container>
  )
}