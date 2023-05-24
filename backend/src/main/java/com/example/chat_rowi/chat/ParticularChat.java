package com.example.chat_rowi.chat;

import javax.persistence.*;

@Entity
@Table(name = "particular_chat")
public class ParticularChat {
    // ???
    @Id
    @SequenceGenerator(
            name = "particular_chat_sequence",
            sequenceName = "particular_chat_sequence",
            allocationSize = 1)
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "employee_sequence"
    )
    private Long id;

    @ManyToOne
    @JoinColumn(
            name = "chat_id"
    )
    private Chat chatId;
    private Long emloyeeId;
    private Long ProductId;
    private Stage stage;

    private String reasonOpened;
    private String reasonClosed;




}
