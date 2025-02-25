import React from 'react';
import { SectionList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// Complex nested data structure
const DATA = [
  {
    title: 'Engineering',
    data: [
      {
        teamName: 'Frontend Team',
        members: [
          { name: 'Alice Johnson', role: 'Frontend Developer', email: 'alice@example.com' },
          { name: 'Bob Smith', role: 'UI/UX Designer', email: 'bob@example.com' },
        ],
        projects: [
          { projectName: 'Web Redesign', progress: 'In Progress' },
          { projectName: 'Mobile App', progress: 'Completed' },
        ],
      },
      {
        teamName: 'Backend Team',
        members: [
          { name: 'Charlie Brown', role: 'Backend Developer', email: 'charlie@example.com' },
          { name: 'Diana Ross', role: 'Database Administrator', email: 'diana@example.com' },
        ],
        projects: [
          { projectName: 'API Development', progress: 'In Progress' },
          { projectName: 'Data Migration', progress: 'Not Started' },
        ],
      },
    ],
  },
  {
    title: 'Marketing',
    data: [
      {
        teamName: 'SEO Team',
        members: [
          { name: 'Eve White', role: 'SEO Specialist', email: 'eve@example.com' },
          { name: 'Frank Black', role: 'Content Writer', email: 'frank@example.com' },
        ],
        projects: [
          { projectName: 'SEO Optimization', progress: 'Completed' },
          { projectName: 'Content Strategy', progress: 'In Progress' },
        ],
      },
      {
        teamName: 'Social Media Team',
        members: [
          { name: 'Grace Green', role: 'Social Media Manager', email: 'grace@example.com' },
          { name: 'Hannah Blue', role: 'Community Manager', email: 'hannah@example.com' },
        ],
        projects: [
          { projectName: 'Instagram Campaign', progress: 'Completed' },
          { projectName: 'Twitter Ads', progress: 'In Progress' },
        ],
      },
    ],
  },
];

const App = (props) => {
  console.log(props);

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => `${item.teamName}-${index}`}

      renderItem={({ item }) => {
        return (
          <View style={styles.teamContainer}>
            <Text style={styles.teamName}>{item.teamName}</Text>\
            {item.members && item.members.length > 0 ? (
              item.members.map((member, idx) => (
                <View key={idx} style={styles.memberContainer}>
                  <Text style={styles.name}>{member.name}</Text>
                  <Text style={styles.role}>{member.role}</Text>
                  <Text style={styles.email}>{member.email}</Text>
                </View>
              ))
            ) : (
              <Text>No members found.</Text>
            )}
            {item.projects && item.projects.length > 0 ? (
              item.projects.map((project, idx) => (
                <View key={idx} style={styles.projectContainer}>
                  <Text style={styles.projectName}>{project.projectName}</Text>
                  <Text style={styles.projectProgress}>Progress: {project.progress}</Text>
                </View>
              ))
            ) : (
              <Text>No projects found.</Text>
            )}
          </View>
        );
      }}
      renderSectionHeader={({ section }) => (
        <View style={styles.header}>
          <Text style={styles.headerText}>{section.title}</Text>
        </View>
      )}
      renderSectionFooter={({ section }) => (
        <TouchableOpacity
          style={styles.footer}
          onPress={() => console.log(`Expand/collapse section: ${section.title}`)}
        >
          <Text style={styles.footerText}>Show More Details</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ddd',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#bbb',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  teamContainer: {
    padding: 10,
    borderBottomColor: 'white',
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5
  },
  memberContainer: {
    paddingVertical: 5,
    marginHorizontal: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  role: {
    fontSize: 14,
    color: 'gray',
    marginHorizontal: 10
  },
  email: {
    fontSize: 14,
    color: 'blue',
    marginHorizontal: 10
  },
  projectContainer: {
    paddingVertical: 5,
    marginHorizontal: 10
  },
  projectName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10

  },
  projectProgress: {
    fontSize: 14,
    color: 'green',
    marginHorizontal: 10
  },
  footer: {
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  footerText: {
    fontSize: 14,
    color: '#007BFF',
  },
});

export default App;





// import { View, Text, SectionList, TouchableOpacity } from 'react-native'
// import React from 'react'

// const App = () => {
//   const DATA = [
//     {
//       name: 'Main dishes',
//       data: ['a', 'b', 'c'],
//       abc: ['1', '2', '4'],
//     },
//     {
//       name: 'Sides',
//       data: ['d', 'e', 'f'],
//       abc: ['4 ', '5 ', ' 6'],
//     },
//     {
//       name: 'Drinks',
//       data: ['g', 'h', 'i'],
//       abc: ['7', '8', '9'],
//     },
//     {
//       name: 'Desserts',
//       data: ['j', 'k'],
//       abc: [' 10', ' 11'],
//     },
//   ];


//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <SectionList
//         sections={DATA}
//         keyExtractor={(item, index) => item + index}
//         renderItem={({ item }) => <Text >{item}</Text>}
//         // renderSectionHeader={({ section }) => (
//         //   <View>
//         //     <Text style={{ fontSize: 50 }}>{section.name}</Text>
//         //     {/* Displaying the data array */}
//         //     <Text style={{ fontSize: 30 }} >{'abc=========>>>>>>'}</Text>
//         //     {section.data.map((item, index) => (
//         //       <Text key={index} >{item}</Text>
//         //     ))}
//         //     {/* Displaying the 'a' array */}
//         //     <Text style={{ fontSize: 30 }} >{'123=========>>>>>>>'}</Text>
//         //     {section.abc.map((item, index) => (
//         //       <Text key={index}>{item}</Text>
//         //     ))}
//         //   </View>
//         // )}
//       />
//     </View>
//   )
// }

// export default App