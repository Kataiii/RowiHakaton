package com.example.chat_rowi.chat;

import javax.persistence.*;

@Entity
@Table(name = "chat")
public class Chat {
    @Id
    @SequenceGenerator(
            name = "chat_sequence",
            sequenceName = "chat_sequence",
            allocationSize = 1)
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "chat_sequence"
    )
    private Long id;

    private Long first_user_id;

    private Long second_user_id;

}
