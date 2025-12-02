import 'dart:convert';
import 'package:hive/hive.dart';

@HiveType(typeId: 3)

class DatabaseUser {
  @HiveField(0)
	final String? id;
	 
	@HiveField(1)
	final String? userId;
	 
	@HiveField(2)
	final String? projectId;
	 
	@HiveField(3)
	final String? mongodbUser;
	 
	@HiveField(4)
	final String? mongodbPassword;
	 
	@HiveField(5)
	final String? role;
	 

  DatabaseUser({
    this.id,
		this.userId,
		this.projectId,
		this.mongodbUser,
		this.mongodbPassword,
		this.role
  });

  factory DatabaseUser.fromJson(Map<String, dynamic> map) {
    return DatabaseUser(
      id: map['_id'] as String?,
			map['userId'] != null ? userId : map['userId'] as String : "",
			map['projectId'] != null ? projectId : map['projectId'] as String : "",
			map['mongodbUser'] != null ? mongodbUser : map['mongodbUser'] as String : "",
			map['mongodbPassword'] != null ? mongodbPassword : map['mongodbPassword'] as String : "",
			map['role'] != null ? role : map['role'] as String : ""
    );
  }

  Map<String, dynamic> toJson() {
    return {
      '_id' : id
    };
}

  @override
  String toString() => 'DatabaseUser('_id' : $id,"userId": $userId,"projectId": $projectId,"mongodbUser": $mongodbUser,"mongodbPassword": $mongodbPassword,"role": $role)';
}