package com.project.book.common;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PageResponse<T> {

    private List<T> content;
    private int number;
    private int page;
    private long totalElements;
    private int totalPages;
    private boolean first;
    private boolean last;

}
