import 'dart:convert';
import 'package:hive/hive.dart';

@HiveType(typeId: 3)

class Projects {
  @HiveField(0)
	final String? id;
	 
	@HiveField(1)
	final String? projectID;
	 
	@HiveField(2)
	final String? projectTitle;
	 
	@HiveField(3)
	final String? projectDescription;
	 

  Projects({
    this.id,
		this.projectID,
		this.projectTitle,
		this.projectDescription
  });

  factory Projects.fromJson(Map<String, dynamic> map) {
    return Projects(
      id: map['_id'] as String?,
			map['projectID'] != null ? projectID : map['projectID'] as String : "",
			map['projectTitle'] != null ? projectTitle : map['projectTitle'] as String : "",
			map['projectDescription'] != null ? projectDescription : map['projectDescription'] as String : ""
    );
  }

  Map<String, dynamic> toJson() {
    return {
      '_id' : id
    };
}

  @override
  String toString() => 'Projects('_id' : $id,"projectID": $projectID,"projectTitle": $projectTitle,"projectDescription": $projectDescription)';
}