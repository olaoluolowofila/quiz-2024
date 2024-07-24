interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuestionSet {
  id: string;
  name: string;
  questions: Question[];
}

export const questionSets: QuestionSet[] = [
  {
    id: "set1",
    name: "Question Set 1",
    questions: [
      {
        question:
          "What position did Josiah Olubode Soyinka hold in the Apostolic Faith Church?",
        options: [
          "Pastor",
          "Deacon",
          "Second Africa Overseer",
          "Choir Director",
        ],
        correctAnswer: "Second Africa Overseer",
      },
      {
        question:
          "How did Josiah Olubode Soyinka handle the loss of his wife and son?",
        options: [
          "With great anger",
          "By leaving the church",
          "With great faith",
          "By becoming reclusive",
        ],
        correctAnswer: "With great faith",
      },
      {
        question:
          "What was Josiah Olubode Soyinka's initial reaction to the Apostolic Faith Church's preaching?",
        options: [
          "Immediate acceptance",
          "Skepticism",
          "Indifference",
          "Outright rejection",
        ],
        correctAnswer: "Skepticism",
      },
      {
        question:
          "How did Josiah Olubode Soyinka end up working at the Nigerian Farmers' Bank?",
        options: [
          "Through a job advertisement",
          "Through his uncle's help",
          "By starting as an intern",
          "Through his educational qualifications",
        ],
        correctAnswer: "Through his uncle's help",
      },
      {
        question:
          "What role did Sister Dore play in Josiah Olubode Soyinka's spiritual journey?",
        options: ["His wife", "His critic", "His mentor", "His student"],
        correctAnswer: "His mentor",
      },
      {
        question: "When did Josiah Olubode Soyinka enter full-time ministry?",
        options: ["1953", "1969", "1973", "1981"],
        correctAnswer: "1981",
      },
      {
        question:
          "How did Josiah Olubode Soyinka manage his finances during his teacher training?",
        options: [
          "By taking loans",
          "By chopping and selling firewood",
          "Through church donations",
          "With family support",
        ],
        correctAnswer: "By chopping and selling firewood",
      },
      {
        question:
          "What was one of the sins Josiah Olubode Soyinka was convicted of by the Holy Spirit?",
        options: [
          "Adultery",
          "Murder",
          "Stealing stationery from the bank",
          "False preaching",
        ],
        correctAnswer: "Stealing stationery from the bank",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's colleagues initially react to his newfound faith?",
        options: [
          "With immediate support",
          "With skepticism and ridicule",
          "With indifference",
          "With anger",
        ],
        correctAnswer: "With skepticism and ridicule",
      },
      {
        question:
          "What was Josiah Olubode Soyinka's approach to handling criticism and opposition?",
        options: [
          "With aggression",
          "With patience and understanding",
          "By ignoring it",
          "By leaving the ministry",
        ],
        correctAnswer: "With patience and understanding",
      },
      {
        question:
          "How did Josiah Olubode Soyinka contribute to the education sector in Nigeria?",
        options: [
          "By building schools",
          "By promoting Christian education",
          "By becoming Minister of Education",
          "By writing textbooks",
        ],
        correctAnswer: "By promoting Christian education",
      },
      {
        question:
          "What role did prayer play in Josiah Olubode Soyinka's daily life and decision-making?",
        options: [
          "It was occasional",
          "It was central",
          "It was discouraged",
          "It was only for church",
        ],
        correctAnswer: "It was central",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's teaching background influence his preaching style?",
        options: [
          "It made it more complicated",
          "It made it shorter",
          "It made it educational and structured",
          "It had no influence",
        ],
        correctAnswer: "It made it educational and structured",
      },
      {
        question:
          "What was Josiah Olubode Soyinka's strategy for church growth and expansion?",
        options: [
          "Aggressive marketing",
          "Community engagement and strategic planning",
          "Merging with other churches",
          "Focusing only on youth",
        ],
        correctAnswer: "Community engagement and strategic planning",
      },
      {
        question:
          "How did Josiah Olubode Soyinka balance his responsibilities to the church and his personal life?",
        options: [
          "By neglecting his family",
          "By prioritizing tasks and seeking family support",
          "By working less hours",
          "By delegating all church work",
        ],
        correctAnswer: "By prioritizing tasks and seeking family support",
      },
      {
        question:
          "What was Josiah Olubode Soyinka's view on the role of education in spiritual development?",
        options: [
          "It was unnecessary",
          "It was crucial",
          "It was only for leaders",
          "It was discouraged",
        ],
        correctAnswer: "It was crucial",
      },
      {
        question:
          "How did Josiah Olubode Soyinka handle the administrative responsibilities of his position?",
        options: [
          "By doing everything himself",
          "By ignoring them",
          "By delegating tasks and implementing effective systems",
          "By hiring external managers",
        ],
        correctAnswer: "By delegating tasks and implementing effective systems",
      },
      {
        question: 'What was the author of "The Story of My Life?"',
        options: [
          "Wole Soyinka",
          "J.O. Soyinka",
          "Chinua Achebe",
          "Ngozi Adichie",
        ],
        correctAnswer: "J.O. Soyinka",
      },
      {
        question:
          "Where is the headquarters of the Apostolic Faith Church in Africa located?",
        options: [
          "Nairobi, Kenya",
          "Accra, Ghana",
          "Lagos, Nigeria",
          "Johannesburg, South Africa",
        ],
        correctAnswer: "Lagos, Nigeria",
      },
      {
        question: "When and where was Josiah Olubode Soyinka born?",
        options: [
          "January 4, 1930",
          "December 25, 1935",
          "March 15, 1928",
          "July 1, 1932",
        ],
        correctAnswer: "January 4, 1930",
      },
      {
        question:
          "What was Josiah Olubode Soyinka's initial profession after finishing primary school?",
        options: ["Banker", "Teacher", "Preacher", "Farmer"],
        correctAnswer: "Teacher",
      },
      {
        question:
          "What significant event happened to Josiah Olubode Soyinka in 1953?",
        options: [
          "He got married",
          "He became a pastor",
          "He got saved",
          "He started university",
        ],
        correctAnswer: "He got saved",
      },
      {
        question:
          "How did Josiah Olubode Soyinka incorporate cultural elements into his ministry?",
        options: [
          "By rejecting local traditions",
          "By respecting local traditions and using culturally relevant examples",
          "By enforcing Western practices",
          "By ignoring cultural differences",
        ],
        correctAnswer:
          "By respecting local traditions and using culturally relevant examples",
      },
      {
        question:
          "What were the core values that guided Josiah Olubode Soyinka's life and ministry?",
        options: [
          "Wealth and fame",
          "Power and influence",
          "Faith, integrity, humility, and service",
          "Ambition and competition",
        ],
        correctAnswer: "Faith, integrity, humility, and service",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's early experiences shape his leadership style in the church?",
        options: [
          "They made him authoritarian",
          "They taught him patience, resilience, and empathy",
          "They made him distant from his congregation",
          "They had no impact on his leadership",
        ],
        correctAnswer: "They taught him patience, resilience, and empathy",
      },
    ],
  },
  {
    id: "set2",
    name: "Question Set 2",
    questions: [
      {
        question:
          "What significant event in Christian history is mentioned in the forward of the book?",
        options: [
          "The Reformation",
          "The Azusa revival",
          "The First Crusade",
          "The Great Awakening",
        ],
        correctAnswer: "The Azusa revival",
      },
      {
        question:
          "What kind of restitution did Josiah Olubode Soyinka make after his conversion?",
        options: [
          "Donating money to charity",
          "Confessing to parents of former students and returning stolen items",
          "Building a new church",
          "Resigning from his job",
        ],
        correctAnswer:
          "Confessing to parents of former students and returning stolen items",
      },
      {
        question:
          "How did Josiah Olubode Soyinka react to the conviction of his sins?",
        options: [
          "He immediately confessed",
          "He denied everything",
          "He walked out of the church and avoided it for three months",
          "He left the country",
        ],
        correctAnswer:
          "He walked out of the church and avoided it for three months",
      },
      {
        question:
          "What difficulties did Josiah Olubode Soyinka face in his personal life after getting married?",
        options: [
          "Financial problems",
          "Several miscarriages and deaths",
          "Conflicts with in-laws",
          "Career setbacks",
        ],
        correctAnswer: "Several miscarriages and deaths",
      },
      {
        question:
          "How did Josiah Olubode Soyinka balance his university studies with his religious commitments?",
        options: [
          "By studying only on weekends",
          "By not studying on Sundays and relying on God's guidance",
          "By reducing his church attendance",
          "By taking fewer courses",
        ],
        correctAnswer:
          "By not studying on Sundays and relying on God's guidance",
      },
      {
        question:
          "What unexpected event happened to Josiah Olubode Soyinka towards the end of his university education?",
        options: [
          "He won a scholarship",
          "He was offered a job",
          "He was rusticated",
          "He got married",
        ],
        correctAnswer: "He was rusticated",
      },
      {
        question:
          "What major life decision did Josiah Olubode Soyinka make after his graduation?",
        options: [
          "To become a politician",
          "To join full-time ministry",
          "To pursue further studies",
          "To start a business",
        ],
        correctAnswer: "To join full-time ministry",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's family react to his decision to join full-time ministry?",
        options: [
          "With unanimous support",
          "With mixed reactions",
          "With complete opposition",
          "With indifference",
        ],
        correctAnswer: "With mixed reactions",
      },
      {
        question:
          "What role did Josiah Olubode Soyinka play in the expansion of the Apostolic Faith Church in Nigeria?",
        options: [
          "He was opposed to expansion",
          "He established new branches and mentored new leaders",
          "He focused only on existing churches",
          "He left Nigeria to expand the church abroad",
        ],
        correctAnswer: "He established new branches and mentored new leaders",
      },
      {
        question:
          "How did Josiah Olubode Soyinka approach personal and professional challenges?",
        options: [
          "By avoiding them",
          "With prayer, faith, and practical problem-solving",
          "By delegating them to others",
          "By giving up easily",
        ],
        correctAnswer: "With prayer, faith, and practical problem-solving",
      },
      {
        question:
          "What lessons did Josiah Olubode Soyinka learn from his time as a village school teacher?",
        options: [
          "The importance of wealth",
          "The value of city life",
          "The importance of humility, dedication, and service",
          "The need for higher education",
        ],
        correctAnswer: "The importance of humility, dedication, and service",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's experiences with the Nigerian Farmers' Bank influence his later life?",
        options: [
          "They made him distrust banks",
          "They taught him the value of integrity and accountability",
          "They inspired him to become a banker",
          "They had no significant impact",
        ],
        correctAnswer:
          "They taught him the value of integrity and accountability",
      },
      {
        question:
          "What were some of the key messages delivered during Josiah Olubode Soyinka's sermons?",
        options: [
          "Political activism",
          "Financial prosperity",
          "Faith, redemption, and the power of prayer",
          "Scientific theories",
        ],
        correctAnswer: "Faith, redemption, and the power of prayer",
      },
      {
        question:
          "How did Josiah Olubode Soyinka maintain a strong faith during times of hardship?",
        options: [
          "By isolating himself",
          "By questioning his beliefs",
          "By staying close to God and seeking support from his church community",
          "By focusing on material wealth",
        ],
        correctAnswer:
          "By staying close to God and seeking support from his church community",
      },
      {
        question:
          "What was Josiah Olubode Soyinka's philosophy on leadership and service?",
        options: [
          "Authoritarian rule",
          "Self-promotion",
          "Humility and putting others' needs first",
          "Delegation of all responsibilities",
        ],
        correctAnswer: "Humility and putting others' needs first",
      },
      {
        question:
          "How did Josiah Olubode Soyinka balance his family life with his ministry responsibilities?",
        options: [
          "By neglecting his family",
          "By prioritizing his time and involving his family in church activities",
          "By separating church and family completely",
          "By reducing his ministry work",
        ],
        correctAnswer:
          "By prioritizing his time and involving his family in church activities",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's faith influence his decision-making process?",
        options: [
          "It had no influence",
          "It made him indecisive",
          "It guided him to make choices aligned with Christian values",
          "It led him to make rash decisions",
        ],
        correctAnswer:
          "It guided him to make choices aligned with Christian values",
      },
      {
        question:
          "What advice did Josiah Olubode Soyinka give to young Christians and future church leaders?",
        options: [
          "To focus on material success",
          "To avoid challenges",
          "To stay committed to faith and serve with humility",
          "To prioritize personal ambitions",
        ],
        correctAnswer: "To stay committed to faith and serve with humility",
      },
      {
        question:
          "How did Josiah Olubode Soyinka incorporate community service into his ministry work?",
        options: [
          "He didn't focus on community service",
          "By initiating local development projects and outreach programs",
          "Only through preaching",
          "By delegating all community work to others",
        ],
        correctAnswer:
          "By initiating local development projects and outreach programs",
      },
      {
        question:
          "How did Josiah Olubode Soyinka ensure the sustainability of the church's programs and initiatives?",
        options: [
          "By focusing only on short-term goals",
          "By relying solely on donations",
          "By training new leaders and establishing strong organizational structures",
          "By limiting the number of programs",
        ],
        correctAnswer:
          "By training new leaders and establishing strong organizational structures",
      },
      {
        question:
          "What personal sacrifices did Josiah Olubode Soyinka make for his ministry work?",
        options: [
          "None",
          "Only financial sacrifices",
          "Financial stability and personal time",
          "His family relationships",
        ],
        correctAnswer: "Financial stability and personal time",
      },
      {
        question: "How did Josiah Olubode Soyinka mentor new church leaders?",
        options: [
          "He didn't mentor others",
          "By providing spiritual guidance, practical training, and ongoing support",
          "Only through formal education",
          "By setting strict rules",
        ],
        correctAnswer:
          "By providing spiritual guidance, practical training, and ongoing support",
      },
      {
        question:
          "How did Josiah Olubode Soyinka address conflicts within the church?",
        options: [
          "By avoiding them",
          "Through authoritarian decisions",
          "Through mediation, prayer, and fostering open communication",
          "By expelling troublemakers",
        ],
        correctAnswer:
          "Through mediation, prayer, and fostering open communication",
      },
      {
        question:
          "How did Josiah Olubode Soyinka engage with the youth in his community?",
        options: [
          "He didn't focus on youth",
          "By organizing youth programs and offering mentorship",
          "Only through Sunday school",
          "By enforcing strict rules",
        ],
        correctAnswer: "By organizing youth programs and offering mentorship",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's approach to evangelism change over time?",
        options: [
          "It didn't change",
          "It became less important to him",
          "It became more community-oriented and culturally sensitive",
          "It became more aggressive",
        ],
        correctAnswer:
          "It became more community-oriented and culturally sensitive",
      },
    ],
  },
  {
    id: "set3",
    name: "Question Set 3",
    questions: [
      {
        question:
          "How did Josiah Olubode Soyinka handle the transition from a secular job to full-time ministry?",
        options: [
          "With great difficulty",
          "By relying on his faith and church community support",
          "By maintaining his secular job part-time",
          "By initially rejecting the transition",
        ],
        correctAnswer: "By relying on his faith and church community support",
      },
      {
        question:
          "What initiatives did Josiah Olubode Soyinka introduce to improve church administration?",
        options: [
          "Centralized decision-making",
          "Leadership training programs and administrative reforms",
          "Elimination of all administrative roles",
          "Outsourcing all administrative tasks",
        ],
        correctAnswer:
          "Leadership training programs and administrative reforms",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's ministry influence social change in his community?",
        options: [
          "It had no impact",
          "By promoting moral values, education, and community service",
          "By encouraging political activism",
          "By isolating the church from the community",
        ],
        correctAnswer:
          "By promoting moral values, education, and community service",
      },
      {
        question:
          "What was Josiah Olubode Soyinka's vision for the future of the Apostolic Faith Church in Africa?",
        options: [
          "To keep it small and exclusive",
          "To merge with other denominations",
          "Expansion, deeper community engagement, and nurturing new leaders",
          "To focus solely on Nigeria",
        ],
        correctAnswer:
          "Expansion, deeper community engagement, and nurturing new leaders",
      },
      {
        question:
          "How did Josiah Olubode Soyinka use his personal experiences to connect with his congregation?",
        options: [
          "He didn't share personal experiences",
          "By exaggerating his achievements",
          "By sharing his journey and lessons learned",
          "By focusing only on his successes",
        ],
        correctAnswer: "By sharing his journey and lessons learned",
      },
      {
        question:
          "What legacy did Josiah Olubode Soyinka leave behind after his passing?",
        options: [
          "A declining church",
          "Personal wealth",
          "A strong, growing church community and numerous lives positively impacted",
          "Political influence",
        ],
        correctAnswer:
          "A strong, growing church community and numerous lives positively impacted",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's approach to ministry influence future church leaders?",
        options: [
          "It had no influence",
          "By demonstrating the importance of faith, dedication, and practical service",
          "By encouraging a focus on wealth",
          "By promoting a hierarchical church structure",
        ],
        correctAnswer:
          "By demonstrating the importance of faith, dedication, and practical service",
      },
      {
        question:
          "What role did Josiah Olubode Soyinka play in international Apostolic Faith Church conferences?",
        options: [
          "He never attended",
          "He was just an observer",
          "He shared insights and fostered global connections",
          "He opposed international cooperation",
        ],
        correctAnswer: "He shared insights and fostered global connections",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's early life experiences shape his worldview?",
        options: [
          "They made him cynical",
          "They had no impact",
          "They instilled values of hard work, resilience, and empathy",
          "They made him focus on material success",
        ],
        correctAnswer:
          "They instilled values of hard work, resilience, and empathy",
      },
      {
        question:
          "What was Josiah Olubode Soyinka's approach to interfaith dialogue and cooperation?",
        options: [
          "He avoided other faiths",
          "He sought to convert everyone",
          "He promoted respect, understanding, and finding common ground",
          "He believed in religious isolation",
        ],
        correctAnswer:
          "He promoted respect, understanding, and finding common ground",
      },
      {
        question:
          "How did Josiah Olubode Soyinka contribute to theological education and training?",
        options: [
          "He discouraged formal education",
          "By establishing programs and promoting continuous learning",
          "He focused only on practical skills",
          "He left education to others",
        ],
        correctAnswer:
          "By establishing programs and promoting continuous learning",
      },
      {
        question:
          "What was the reaction of the Nigerian Farmers' Bank when Josiah Olubode Soyinka made restitution?",
        options: [
          "They rejected his efforts",
          "They were indifferent",
          "They appreciated his act of repentance",
          "They rehired him",
        ],
        correctAnswer: "They appreciated his act of repentance",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's community initially view his transformation after joining the Apostolic Faith Church?",
        options: [
          "With immediate acceptance",
          "With skepticism at first, but gradually with respect",
          "With complete rejection",
          "They were unaware of any change",
        ],
        correctAnswer: "With skepticism at first, but gradually with respect",
      },
      {
        question:
          "What role did music play in Josiah Olubode Soyinka's spiritual journey?",
        options: [
          "It was unimportant",
          "It was discouraged",
          "It provided solace and a means of worship",
          "It was only for entertainment",
        ],
        correctAnswer: "It provided solace and a means of worship",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's interactions with other denominations influence his faith?",
        options: [
          "They weakened his faith",
          "They had no impact",
          "They strengthened his faith and appreciation for diversity",
          "They made him doubt his own denomination",
        ],
        correctAnswer:
          "They strengthened his faith and appreciation for diversity",
      },
      {
        question:
          "What challenges did Josiah Olubode Soyinka face as a teacher in a Muslim-dominated area?",
        options: [
          "Language barriers",
          "Lack of resources",
          "Opposition to Christian teachings and cultural conflicts",
          "Poor student attendance",
        ],
        correctAnswer:
          "Opposition to Christian teachings and cultural conflicts",
      },
    ],
  },
  {
    id: "set4",
    name: "Question Set 4",
    questions: [
      {
        question:
          "What event marked a significant turning point in Josiah Olubode Soyinka's life at the age of 23?",
        options: [
          "Getting married",
          "Starting university",
          "Fully committing to his faith",
          "Leaving Nigeria",
        ],
        correctAnswer: "Fully committing to his faith",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's view of Christianity change after attending the Apostolic Faith Church?",
        options: [
          "It remained unchanged",
          "He became more skeptical",
          "He moved from skepticism to deep conviction",
          "He left Christianity altogether",
        ],
        correctAnswer: "He moved from skepticism to deep conviction",
      },
      {
        question:
          "What was the outcome of Josiah Olubode Soyinka's rustication from the university?",
        options: [
          "He never returned to studies",
          "He changed universities",
          "He was later cleared and allowed to continue",
          "He pursued a different career",
        ],
        correctAnswer: "He was later cleared and allowed to continue",
      },
      {
        question:
          "What kind of support did Josiah Olubode Soyinka receive from the Apostolic Faith Church during his time in the ministry?",
        options: [
          "Financial support only",
          "No support",
          "Spiritual guidance and material assistance",
          "Political backing",
        ],
        correctAnswer: "Spiritual guidance and material assistance",
      },
      {
        question:
          "How did Josiah Olubode Soyinka manage to finance his university education despite financial difficulties?",
        options: [
          "Through bank loans",
          "Through hard work and church community support",
          "Through government scholarships",
          "He didn't attend university",
        ],
        correctAnswer: "Through hard work and church community support",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's leadership style evolve over his career?",
        options: [
          "It became more authoritarian",
          "It remained unchanged",
          "It became more inclusive and mentorship-focused",
          "It became less involved",
        ],
        correctAnswer: "It became more inclusive and mentorship-focused",
      },
      {
        question:
          "What were some of the critical decisions Josiah Olubode Soyinka made during his tenure as Second Africa Overseer?",
        options: [
          "Closing down churches",
          "Focusing only on Nigeria",
          "Strategic planning for church expansion and addressing internal conflicts",
          "Merging with other denominations",
        ],
        correctAnswer:
          "Strategic planning for church expansion and addressing internal conflicts",
      },
      {
        question:
          "How did Josiah Olubode Soyinka balance traditional practices with modern approaches in his ministry?",
        options: [
          "By rejecting all modern approaches",
          "By abandoning all traditional practices",
          "By being adaptable while maintaining core values",
          "By strictly separating the two",
        ],
        correctAnswer: "By being adaptable while maintaining core values",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's family support his ministry work?",
        options: [
          "They didn't support him",
          "By providing financial support only",
          "By being actively involved in church activities",
          "By taking over his responsibilities",
        ],
        correctAnswer: "By being actively involved in church activities",
      },
      {
        question:
          "How did Josiah Olubode Soyinka ensure inclusivity and diversity within the church?",
        options: [
          "By excluding certain groups",
          "By ignoring differences",
          "By fostering an environment of respect and openness",
          "By enforcing strict rules",
        ],
        correctAnswer: "By fostering an environment of respect and openness",
      },
      {
        question:
          "What impact did Josiah Olubode Soyinka have on the lives of individuals in his community?",
        options: [
          "Little to no impact",
          "Negative impact",
          "Profound impact through spiritual guidance and personal mentorship",
          "Only impacted church members",
        ],
        correctAnswer:
          "Profound impact through spiritual guidance and personal mentorship",
      },
      {
        question:
          "How did Josiah Olubode Soyinka address issues of morality and ethics within the church?",
        options: [
          "By ignoring them",
          "By expelling those who didn't conform",
          "By setting a personal example and offering clear guidance",
          "By leaving it to individual interpretation",
        ],
        correctAnswer:
          "By setting a personal example and offering clear guidance",
      },
      {
        question:
          "What were some of the significant achievements of Josiah Olubode Soyinka's ministry?",
        options: [
          "Building personal wealth",
          "Expanding political influence",
          "Expanding the church's reach and establishing educational programs",
          "Merging with other churches",
        ],
        correctAnswer:
          "Expanding the church's reach and establishing educational programs",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's faith shape his response to national issues in Nigeria?",
        options: [
          "He avoided national issues",
          "By promoting political parties",
          "By advocating for peace, justice, and moral integrity",
          "By encouraging civil disobedience",
        ],
        correctAnswer: "By advocating for peace, justice, and moral integrity",
      },
      {
        question:
          "What challenges did Josiah Olubode Soyinka face in maintaining the church's doctrinal purity?",
        options: [
          "There were no challenges",
          "Pressure to adopt secular values",
          "Addressing deviations through education",
          "Constant changes in doctrine",
        ],
        correctAnswer: "Addressing deviations through education",
      },
      {
        question:
          "How did Josiah Olubode Soyinka deal with the emotional toll of his personal losses?",
        options: [
          "By leaving the ministry",
          "By becoming bitter",
          "By seeking solace in his faith and continuing his ministry work",
          "By isolating himself",
        ],
        correctAnswer:
          "By seeking solace in his faith and continuing his ministry work",
      },
      {
        question:
          "What was Josiah Olubode Soyinka's first encounter with the Apostolic Faith Church like?",
        options: [
          "He immediately joined",
          "He was part of a delegation sent to criticize",
          "He accidentally attended a service",
          "He was invited by a friend",
        ],
        correctAnswer: "He was part of a delegation sent to criticize",
      },
      {
        question:
          "How did Josiah Olubode Soyinka further his education after completing teacher training?",
        options: [
          "He didn't pursue further education",
          "He attended vocational school",
          "He attended university",
          "He studied abroad",
        ],
        correctAnswer: "He attended university",
      },
      {
        question:
          "What significant life event happened to Josiah Olubode Soyinka in 1969?",
        options: [
          "He became a pastor",
          "He got married",
          "He left Nigeria",
          "He started his own church",
        ],
        correctAnswer: "He got married",
      },
      {
        question:
          "How did Josiah Olubode Soyinka overcome financial challenges during his ministry?",
        options: [
          "By taking loans",
          "By working a second job",
          "By relying on faith and church community support",
          "By reducing church activities",
        ],
        correctAnswer: "By relying on faith and church community support",
      },
      {
        question:
          "What were some of the key challenges Josiah Olubode Soyinka faced in expanding the Apostolic Faith Church?",
        options: [
          "Lack of funding",
          "Government opposition",
          "Resistance from local communities and logistical difficulties",
          "Shortage of trained pastors",
        ],
        correctAnswer:
          "Resistance from local communities and logistical difficulties",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's relationship with his congregation members impact his ministry?",
        options: [
          "It had no impact",
          "It made his ministry less effective",
          "It positively impacted his ministry through empathy and support",
          "It led to conflicts within the church",
        ],
        correctAnswer:
          "It positively impacted his ministry through empathy and support",
      },
      {
        question:
          "What was Josiah Olubode Soyinka's approach to evangelism in his early years?",
        options: [
          "Aggressive conversion tactics",
          "Door-to-door preaching",
          "Focus on youth outreach",
          "Community-oriented and culturally sensitive",
        ],
        correctAnswer: "Community-oriented and culturally sensitive",
      },
      {
        question:
          "How did Josiah Olubode Soyinka's upbringing influence his decision to join the ministry?",
        options: [
          "It had no influence",
          "It made him resist joining",
          "It instilled a sense of duty and discipline",
          "It pushed him towards a secular career",
        ],
        correctAnswer: "It instilled a sense of duty and discipline",
      },
    ],
  },
];

export type { Question, QuestionSet };
