import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const [datas, setData] = useState([]);
  console.log(datas.articles);

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    getNotification()

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);


  function getNotification() {
        fetch('http://newsapi.org/v2/top-headlines?country=tr&apiKey=bbc189fcd1ab4a78ae8e75256349d7aa')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        
        <Text>Title: {notification && datas.title} </Text>
        <Text>Body: {notification && datas.description}</Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification(datas);
        }}
      />
    </View>
  );
}

async function schedulePushNotification(datas) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: datas.title,
      body: datas.description,
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

/*
componentDidMount(){
  this.registerForPushNotificationsAsync()
}
  
 registerForPushNotificationsAsync = async() => {
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS)
    let finalState = status

    if (status !== 'granted') {
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      finalState = status
    }

    if (finalState !== 'granted') {
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync()
    console.log(token)

  }
  */