import { BaseEntity , Column , Entity , PrimaryGeneratedColumn } from "typeorm";

@Entity('crud')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    emp_id:string;


    @Column({
        type:'varchar', name:'id' , nullable:false
    })
    id:string;
    @Column({
        type:'varchar', name:'fname' , nullable:false
    })
    fname:string;

    @Column({
        type:'varchar' , name:'lname' , nullable:false
    })
    lname :string;

    @Column({
        type: 'varchar' , name:'email', unique:true , nullable:false
    })
    email:string;

    
}