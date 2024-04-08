import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default ScrCourses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: '2º I, Lenguaje Tecnologico',
      progress: '20%',
      users: [
        { id: 1, img:require('../img/ico/avatar/avatar1.png') },
        { id: 2, img:require('../img/ico/avatar/avatar2.png') },
        { id: 3, img:require('../img/ico/avatar/avatar6.png') },
        { id: 4, img:require('../img/ico/avatar/avatar1.png') },
        { id: 5, img:require('../img/ico/avatar/avatar3.png') },
        { id: 6, img:require('../img/ico/avatar/avatar5.png') },
      ],
      backgroundColor: '#ffdcb2',
      titleColor: '#ff8c00',
    },
    {
      id: 2,
      title: '2º III, Lenguaje Tecnologico',
      progress: '40%',
      users: [
        { id: 7, img:require('../img/ico/avatar/avatar2.png') },
        { id: 8, img:require('../img/ico/avatar/avatar4.png') },
        { id: 9, img:require('../img/ico/avatar/avatar6.png') },
      ],
      backgroundColor: '#bfdfdf',
      titleColor: '#008080',
    },
    {
      id: 3,
      title: '2º I, Sistemas Tecnologico',
      progress: '50%',
      users: [
        { id: 10, img:require('../img/ico/avatar/avatar2.png') },
        { id: 11, img:require('../img/ico/avatar/avatar4.png') },
        { id: 12, img:require('../img/ico/avatar/avatar1.png') },
        { id: 13, img:require('../img/ico/avatar/avatar3.png') },
        { id: 14, img:require('../img/ico/avatar/avatar5.png') },
      ],
      backgroundColor: '#e2caf8',
      titleColor: '#8a2be2',
    },
    {
      id: 4,
      title: '4º Programacion., Sistemas Operativos',
      progress: '60%',
      users: [
        { id: 15, img:require('../img/ico/avatar/avatar2.png') },
        { id: 16, img:require('../img/ico/avatar/avatar4.png') },
        { id: 17, img:require('../img/ico/avatar/avatar6.png') },
      ],
      backgroundColor: '#d8e4fa',
      titleColor: '#6495ed',
    },
    
  ]);

  const renderAppointmentCard = ({ item }) => (
    <View style={[styles.card, { backgroundColor: item.backgroundColor, borderTopWidth:4, borderTopColor: item.titleColor}]}>
      <Text style={[styles.cardTitle, { color: item.titleColor }]}>{item.title}</Text>
      <View style={styles.cardDates}>
        <Text style={styles.cardDate}>Progress {item.progress}</Text>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.attendeesContainer}>
          {/* {item.users.map((attendee) => (
            [
            // <Image key={attendee.id} source={require( '../img/ico/avatar/avatar1.png' )} style={styles.attendeeImage} />            
            ,
            <Text>{attendee.img} </Text>                  
            ]

            
                              
          ))} */
          }
            {item.users.map((attendee) => (
            
            
            <Image key={attendee.id} source={ attendee.img}  style={styles.attendeeImage} />
            
                              
          ))}
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>View</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Config</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const searchFilter = (item) => {
    const query = searchQuery.toLowerCase();
    return item.title.toLowerCase().includes(query);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList 
        contentContainerStyle={styles.listContainer}
        data={appointments.filter(searchFilter)}
        renderItem={renderAppointmentCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop:60,
  },
  listContainer:{
    paddingHorizontal:5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 2,
    borderRadius:5,
    borderColor:'#A9A9A9',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  card: {
    flex:1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    marginHorizontal:10,

    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize:18,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  cardDates: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  cardDate: {
    color: '#888',
  },
  cardContent: {
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  attendeesContainer: {
    flexWrap:'wrap',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  attendeeImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: -10,
    borderWidth:0.5,
    marginTop:3,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    marginTop:15,
    backgroundColor: '#DCDCDC',
    padding:8,
    borderRadius: 5,
    borderWidth:1,
    borderColor:'#00008B',
    marginRight: 10,
  },
  buttonText: {
    color: '#00008B',
  },
});

// export default ScrCourses;

                                            